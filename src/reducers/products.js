var initialState = [
    {
        id: 1,
        name: 'iphone X 32G',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_3.jpg',
        price: 250,
        description: 'Sản phẩm do apple sản xuất',
        iventory: 10,
        rating: 4

    },
    {
        id: 2,
        name: 'iphone X 64G',
        image: 'https://i.ebayimg.com/images/g/9TsAAOSwrY9a4bwO/s-l1600.jpg',
        price: 500,
        description: 'Sản phẩm do apple sản xuất',
        iventory: 10,
        rating: 5
    },
    {
        id: 3,
        name: 'iphone XS MAX',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png',
        price: 800,
        description: 'Sản phẩm do apple sản xuất',
        iventory: 10,
        rating: 5
    },


];
const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;


