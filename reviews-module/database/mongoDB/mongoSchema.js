// This Mongo Schema uses one-to-many relationship

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_id: { type: Number, required: true, unique: true },
    product_name: { type: String, required: true, unique: true },
    category: { type: String },
    description: { type: String },
    specification: { type: String },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'reviews' }],
    inventory: [{
        color: { type: String, required: true },
        product_images: [{
            product_images_id: { type: Number, required: true, unique: true },
            product_images_url: { type: String, required: true }
        }],
        size: [{
            size_label: { type: Number, required: true, unique: true },
            UPC_barcode: { type: Number, required: true },
            price: { type: Number, required: true },
            quantity: [{
                    item_No: { type: Number, required: true },
                    SKU_Number: { type: String, unique: true, required: true }
            }],
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now }
        }]
    }]
});

const reviewSchema = new Schema({
    review_id: { type: Number, required: true, unique: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'product' },
    user_id: { type: Schema.Types.ObjectId, ref: 'user' },
    opinion: { type: String, required: true },
    text: { type: String },
    rating_overall: { type: Number, min: 1, max: 5, required: true },
    doesRecommended: { type: Boolean, required: true },
    rating_size: { type: String, enum: ['a size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'a size too big'], required: true },
    rating_width: { type: String, enum: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'], required: true },
    rating_comfort: { type: String, enum: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'], required: true },
    rating_quality: { type: String, enum: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'], required: true },
    isHelpful: { type: Number, required: true, default: 0 },
    isNotHelpful: { type: Number, required: true, default: 0 },
    created_at: { type: Date, required: true },
    review_photo_path: [{
        review_photo_id: { type: Number },
        review_photo_url: { type: String }
    }]
});

const userSchema = new Schema({
    user: {
        user_id: { type: Number, unique: true },
        firstname: { type: String },
        lastname: { type: String },
        gender: { type: String, enum: ['Male', 'Female', 'Other'] },
        nickname: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    review: [{
        review_id: { type: Schema.Types.ObjectId, ref: 'reviews' }
    }]
})

const ProductModel = mongoose.model('product' , productSchema);

const ReviewModel = mongoose.model('review', reviewSchema);

const UserModel = mongoose.model('user', userSchema);

module.exports = { ProductModel, ReviewModel, UserModel };