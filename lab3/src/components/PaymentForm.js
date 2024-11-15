import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './PaymentForm.css';

const schema = yup.object().shape({
  edrpou: yup.string().required("EDRPOU is required").min(8, "Must be at least 8 characters"),
  recipientName: yup.string().required("Recipient's name is required"),
  iban: yup.string().required("IBAN is required").min(29, "Must be at least 29 characters"),
  paymentCategory: yup.string().required("Payment category is required"),
  senderName: yup.string().required("Sender's name is required"),
  phoneNumber: yup.string().required("Phone number is required").matches(/^\d+$/, "Must be a valid phone number"),
  amount: yup.number().required("Amount is required").positive("Must be a positive number"),
  cardNumber: yup.string().required("Card number is required").min(16, "Must be at least 16 characters"),
  expirationDate: yup.string().required("Expiration date is required").matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "Must be a valid date format (MM/YY)"),
  cvv: yup.string().required("CVV is required").min(3, "Must be at least 3 characters"),
});

const PaymentForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
      <div className="form-group">
        <label>EDRPOU or RNOKPP</label>
        <input {...register("edrpou")} />
        <p className="error">{errors.edrpou?.message}</p>
      </div>
      <div className="form-group">
        <label>Recipient's Name</label>
        <input {...register("recipientName")} />
        <p className="error">{errors.recipientName?.message}</p>
      </div>
      <div className="form-group">
        <label>IBAN Account</label>
        <input {...register("iban")} />
        <p className="error">{errors.iban?.message}</p>
      </div>
      <div className="form-group">
        <label>Payment Category</label>
        <select {...register("paymentCategory")}>
          <option value="">Select...</option>
          <option value="budget">Budget Payments</option>
          <option value="other">Other Payments</option>
        </select>
        <p className="error">{errors.paymentCategory?.message}</p>
      </div>
      <div className="form-group">
        <label>Sender's Name</label>
        <input {...register("senderName")} />
        <p className="error">{errors.senderName?.message}</p>
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input {...register("phoneNumber")} />
        <p className="error">{errors.phoneNumber?.message}</p>
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input type="number" {...register("amount")} />
        <p className="error">{errors.amount?.message}</p>
      </div>
      <div className="form-group">
        <label>Card Number</label>
        <input {...register("cardNumber")} />
        <p className="error">{errors.cardNumber?.message}</p>
      </div>
      <div className="form-group">
        <label>Expiration Date</label>
        <input {...register("expirationDate")} />
        <p className="error">{errors.expirationDate?.message}</p>
      </div>
      <div className="form-group">
        <label>CVV</label>
        <input {...register("cvv")} />
        <p className="error">{errors.cvv?.message}</p>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default PaymentForm;
