import Stripe from "stripe";
import { STRIPE_SECRET_KEY, URL_CANCEL, URL_SUCCESS } from "../config.js";

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const createSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.map((data) => ({
        price_data: {
          product_data: {
            name: data.title,
            description: data.description,
            images: [data.thumbnail],
          },
          currency: "usd",
          unit_amount: Math.round((data.price - (data.price * data.discountPercentage) / 100) * 100),
        },
        quantity: data.quantity,
      })),
      mode: "payment",
      success_url: "https://nelson1499.github.io/my-app-shopping/#/successful-purchase",
      cancel_url: "https://nelson1499.github.io/my-app-shopping/#/cart"
    });
    
    return res.json(session);
    
  } catch (error) {
    res.json({ message: "Error: " + error.message });
  }
};
