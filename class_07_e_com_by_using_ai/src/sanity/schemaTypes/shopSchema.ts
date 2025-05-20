// ./schemas/product.js

export const ProductSchma = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      description: 'Original price before discount (for sale items)',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload product image',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
    },
    {
      name: 'onSale',
      title: 'On Sale',
      type: 'boolean',
      description: 'Mark true if product is on discount',
    },
    {
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'features',
      title: 'Product Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
