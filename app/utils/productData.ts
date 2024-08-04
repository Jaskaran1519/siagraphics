interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const allProducts: { [key: string]: Product[] } = {
  category1: [
    { id: "1", name: "Sticker", description: "Custom stickers", price: 5 },
    {
      id: "2",
      name: "Letterhead",
      description: "Custom letterheads",
      price: 10,
    },
    {
      id: "3",
      name: "Business Card",
      description: "Custom business cards",
      price: 20,
    },
    { id: "4", name: "NFC Card", description: "Custom NFC cards", price: 25 },
  ],
  // Add more categories and products here
};

export function getProductsByCategory(categoryId: string): Product[] {
  return allProducts[categoryId] || [];
}
