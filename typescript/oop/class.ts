class M5a {
    thuc_hanh: string;
    ly_thuyet: string;
  
    constructor(thuc_hanh: string, ly_thuyet: string) {
      this.thuc_hanh = thuc_hanh;
      this.ly_thuyet = ly_thuyet;
    }
  
    getm5(): string {
      return `${this.thuc_hanh} ${this.ly_thuyet}`;
    }
  }
  
  const m5aObj = new M5a("Thực hành", "Lý thuyết");
  
  console.log(m5aObj.getm5()); // Kết quả: "Thực hành Lý thuyết"