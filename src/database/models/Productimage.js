module.exports = (sequelize, dataTypes) => {
    let alias = "Products_images";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        image_name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        }
    };

    let config = {
        tableName: "products_images",
        timestamps: false,
    };

    const ProductImage = sequelize.define(alias, cols, config);

    ProductImage.associate = (models) => {
        ProductImage.hasMany(models.Product, {
            as: "product",
            foreingKey: "product_id"
        })
    } 

    return ProductImage;
}