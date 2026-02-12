import React from 'react'
const couriers = ["Delhivery", "BlueDart", "DTDC", "XpressBees"];
const statuses = ['Delivered', "In Transit", "Pending", "Cancelled"];
const paymentModes = ["COD", "prepaid"]

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)] 

// Mapping Post data to Orderdata 

export const orderData = (post) => {
    
    return {
        id: `ORD-${post.id}`,
        customerName: post.title.slice(0, 10),
        mobileNumber: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
        courierName: randomItem(couriers),
        paymentMode: randomItem(paymentModes),
        amount: Math.floor(Math.random() * 2000) + 500,
        status: randomItem(statuses),
        createdDate: new Date().toLocaleDateString(),
    }
}
