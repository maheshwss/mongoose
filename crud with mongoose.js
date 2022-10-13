const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
    name: String,
    brands: String,
    price: Number,
    category: String
});

const ProductModel = mongoose.model('products', ProductSchema);

//insert one
const insertData = async () => {
    let data = new ProductModel({
        name: "m20",
        brands: 'mi',
        price: 200,
        category: 'mobile'
    });
    let result = await data.save();
    console.log(result);
}

// alternate use insertMany to insert one or more
// const insertData = async () => {
//     let data = await ProductModel.insertMany([{
//         name: "m90",
//         brands: 'mi',
//         price: 200,
//         category: 'mobile'
//     }]);
//     console.log(data);
// }

// insertData();

const updateData = async () => {
    let data = await ProductModel.updateOne(
        {name: "max 3"},
        {$set: {name: "m50", price:250}}
    );
    console.log(data);
};

// updateData();
  
const deleteData = async () => {
    let data = await ProductModel.deleteOne(
        {name: "m50"}
    );
    console.log(data);
};

// deleteData();

//find one 
// const findData = async () => {
//     let data = await ProductModel.find(
//         {name: "m10"}
//     );
//     console.log(data);
// };

//find all
const findData = async () => {
    let data = await ProductModel.find();
    console.log(data);
};

findData();