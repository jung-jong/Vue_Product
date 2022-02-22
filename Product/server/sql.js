module.exports = {
  productList: {
    query: `SELECT t1.*, t2.path, t3.category1, t3.category2, t3.category3
    from t_product t1, t_image t2, t_category t3
    WHERE t1.id = t2.product_id AND t2.type = 1 and t1.category_id = t3.id`,
  },
  productList2: {
    query: `select t3.*, t4.path from (select t1.*, t2.category1, t2.category2, t2.category3 
      from t_product t1, t_category t2
      where t1.category_id = t2.id) t3
      left join (select * from t_image where type=1) t4
      on t3.id = t4.product_id`,
  },
  productDetail: {
    query: `select t1.*, t2.path, t3.category1, t3.category2, t3.category3 
    from t_product t1, t_image t2, t_category t3
    where t1.id = ? and t1.id = t2.product_id and t2.type = 3 and t1.category_id = t3.id`,
  },
  productMainImages: {
    query: `SELECT * FROM t_image WHERE product_id = ? AND TYPE = 2`,
  },
  productInsert: {
    query: `INSERT INTO t_product (product_name,product_price,delivery_price,add_delivery_price,tags,outbound_days,
      seller_id, category_id)
      VALUES(?, ?, ?, ?, ?,?,?,?);`,
  },
  productImageInset: {
    query: `INSERT INTO t_image (product_id, type, path)
    VALUES(?,?,?)`,
  },
  productDelete: {
    query: `delete from t_product where id=?`,
  },
  sellerList: {
    query: `select * from t_seller`,
  },
  signUp: {
    query: `INSERT INTO t_user SET ? ON DUPLICATE KEY UPDATE ?`,
  },
};