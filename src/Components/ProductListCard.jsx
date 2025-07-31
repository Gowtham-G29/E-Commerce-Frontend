import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../Service/Api";
import {
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Stack,
} from "@mui/material";

function ProductsByDepartmentPage() {
  const { deptName } = useParams();
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      if (deptName === "Women" || deptName === "Men") {
        const filtered = response.data.filter(
          (p) => p.departments?.name === deptName
        );
        setProducts(filtered);
      } else {
        setProducts(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [deptName]);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setOpen(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Products in {deptName} Department 
        <br></br>
        Count {products.length}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: 6,
              },
            }}
            onClick={() => handleOpen(product)}
            elevation={3}
          >
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {product.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        {selectedProduct && (
          <>
            <DialogTitle textAlign="center">
              {selectedProduct.name}
            </DialogTitle>
            <DialogContent>
              <Stack spacing={1}>
                <DialogContentText>
                  <strong>Brand:</strong> {selectedProduct.brand}
                </DialogContentText>
                <DialogContentText>
                  <strong>Category:</strong> {selectedProduct.category}
                </DialogContentText>
                <DialogContentText>
                  <strong>Department:</strong> {selectedProduct.departments?.name}
                </DialogContentText>
                <DialogContentText>
                  <strong>SKU:</strong> {selectedProduct.sku}
                </DialogContentText>
                <DialogContentText>
                  <strong>Cost:</strong> $
                  {parseFloat(selectedProduct.cost).toFixed(2)}
                </DialogContentText>
                <DialogContentText>
                  <strong>Retail Price:</strong> $
                  {parseFloat(selectedProduct.retailPrice).toFixed(2)}
                </DialogContentText>
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default ProductsByDepartmentPage;
