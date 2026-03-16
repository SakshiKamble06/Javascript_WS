const product={
    name :" Cookie" ,
    price :150 ,
    Stock : " 100 packets"
};
for(let key in product){
    console.log(`${key} :${product[key]}`)
}