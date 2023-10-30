var M5a = /** @class */ (function () {
    function M5a(thuc_hanh, ly_thuyet) {
        this.thuc_hanh = thuc_hanh;
        this.ly_thuyet = ly_thuyet;
    }
    M5a.prototype.getm5 = function () {
        return "".concat(this.thuc_hanh, " ").concat(this.ly_thuyet);
    };
    return M5a;
}());
var m5aObj = new M5a("Thực hành", "Lý thuyết");
console.log(m5aObj.getm5()); // Kết quả: "Thực hành Lý thuyết"
