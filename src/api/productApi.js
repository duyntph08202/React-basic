import URL from "./axiosHttp";

const getAll = () => {
    return URL.get("/products");
};

const get = id => {
    return URL.get(`/products/${id}`);
};

const getlimit8 = () => {
    return URL.get(`/products?_start=0&_limit=8&_sort=date&_order=desc`);
};

const getcate = id => {
    return URL.get(`/products?category_id=${id}`);
};

const create = data => {
    return URL.post("/products", data);
};

const update = (id, data) => {
    return URL.put(`/products/${id}`, data);
};

const remove = id => {
    return URL.delete(`/products/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    getcate,
    getlimit8
};