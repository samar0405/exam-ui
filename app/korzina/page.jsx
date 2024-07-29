"use client";
import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  Box,
  Paper,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import gantel from "../../images/gantel.svg";
import sumka from "../../images/sumka.svg";
import fudbolka from "../../images/fudbolka.svg";
import sport from "../../images/sport.svg";
import clik from "../../images/clik.svg";
import payme from "../../images/payme.svg";
import karta from "../../images/karta.svg";
import shot from "../../images/shot.svg";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Гантель виниловая, 2 x 3 кг",
      price: 300000,
      image: gantel,
      quantity: 1,
    },
    {
      id: 2,
      name: "Гантель виниловая, 2 x 3 кг",
      price: 220000,
      image: sumka,
      quantity: 1,
    },
    {
      id: 3,
      name: "Гантель виниловая, 2 x 3 кг",
      price: 1500000,
      image: fudbolka,
      quantity: 1,
    },
    {
      id: 4,
      name: "Гантель виниловая, 2 x 3 кг",
      price: 30000,
      image: sport,
      quantity: 1,
    },
  ]);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + increment } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="bg-[#F2F2F2] w-full pb-44">
        <Container
          maxWidth="lg"
          sx={{ pt: "244px", bgcolor: "#F2F2F2", maxWidth: "1280px" }}
        >
          <Typography variant="h4" gutterBottom>
            Ваша корзина
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {cartItems.map((item) => (
                <Card
                  sx={{ display: "flex", mb: 2, maxWidth: "700px" }}
                  key={item.id}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {item.price} uzs
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </IconButton>
                      <Typography variant="body1">{item.quantity}</Typography>
                      <IconButton
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </IconButton>
                    </Box>
                  </CardContent>
                  <IconButton onClick={() => handleRemoveItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Card>
              ))}
              <Button color="secondary" onClick={() => setCartItems([])}>
                Очистить все
              </Button>
            </Grid>
            <Grid item xs={12} md={4} sx={{ bgcolor: "#fff", pr: "16px" }}>
              <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6">Итого</Typography>
                <Typography>Кол-во товаров: {totalItems}</Typography>
                <Typography>Сумма: {totalCost} uzs</Typography>
              </Paper>
              <Box component="form">
                <Typography variant="h6">Ваши данные</Typography>
                <TextField
                  fullWidth
                  label="Имя /Фамилия"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Ваш номер"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Адрес доставки"
                  margin="normal"
                  required
                />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Тип оплаты
                </Typography>
                <div>
                  <div className="flex justify-between items-center pb-6">
                    <Image src={clik} alt="clik" className="w-24" />
                    <Image src={payme} alt="clik" className="w-24" />
                    <Image src={karta} alt="clik" className="w-24" />
                  </div>
                  <Image src={shot} alt="shot" className="w-24" />
                </div>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, bgcolor: "#FBD029" }}
                >
                  Купить
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default CartPage;
