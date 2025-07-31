import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Stack,
} from '@mui/material';

const ProductListCard = ({ products }) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        p={2}
      >
        {products.map((product, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
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
      </Box>

      {/* Dialog showing full product details in column */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        {selectedProduct && (
          <>
            <DialogTitle textAlign="center">
              {selectedProduct.name}
            </DialogTitle>
            <DialogContent>
              <Stack spacing={1}>
                <DialogContentText><strong>Brand:</strong> {selectedProduct.brand}</DialogContentText>
                <DialogContentText><strong>Category:</strong> {selectedProduct.category}</DialogContentText>
                <DialogContentText><strong>Department:</strong> {selectedProduct.department}</DialogContentText>
                <DialogContentText><strong>SKU:</strong> {selectedProduct.sku}</DialogContentText>
                <DialogContentText><strong>Cost:</strong> ${parseFloat(selectedProduct.cost).toFixed(2)}</DialogContentText>
                <DialogContentText><strong>Retail Price:</strong> ${parseFloat(selectedProduct.retailPrice).toFixed(2)}</DialogContentText>
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default ProductListCard;
