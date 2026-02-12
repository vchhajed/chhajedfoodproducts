import { NextRequest, NextResponse } from 'next/server';

// Placeholder Razorpay secret — replace with real key from environment variables
// const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'rzp_secret_xxxxxxxxx';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = 'INR' } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, message: 'Invalid order amount' },
        { status: 400 }
      );
    }

    // -------------------------------------------------------
    // Placeholder Razorpay order creation
    //
    // In production, replace this block with actual Razorpay SDK:
    //
    // const Razorpay = require('razorpay');
    // const instance = new Razorpay({
    //   key_id: process.env.RAZORPAY_KEY_ID,
    //   key_secret: process.env.RAZORPAY_KEY_SECRET,
    // });
    //
    // const order = await instance.orders.create({
    //   amount: amount * 100, // Razorpay expects amount in paise
    //   currency,
    //   receipt: `receipt_${Date.now()}`,
    // });
    // -------------------------------------------------------

    const mockOrder = {
      id: `order_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      amount: amount * 100, // Razorpay uses paise
      currency,
      status: 'created',
      receipt: `receipt_${Date.now()}`,
    };

    return NextResponse.json({
      success: true,
      order: mockOrder,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
