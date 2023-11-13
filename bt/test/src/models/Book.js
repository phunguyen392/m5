import axios from "axios";

class Book {
  constructor() {
    //khai bao thuoc tinh
    this.api_url = "https://my-json-server.typicode.com/codegym-vn/mock-api-books/books";
  }

  //lay tat ca
  //promise
  all() {
    return new Promise((resolve, reject) => {
      axios
        .get(this.api_url )
        .then((res) => {
          resolve(res);
        })
        .catch((res) => {
          reject(res);
        });
    });
  }


  // Lấy chi tiết

  find( id ){
    return new Promise( (resolve, reject) => {
        axios.get( this.api_url + '/' + id ).then( (res) => {
            resolve(res)
        }).catch( (res) => {
            reject(res);
        });
    })
}

//them moi
	
store( data ){
    return new Promise( (resolve, reject) => {
        axios.post( this.api_url , data ).then( (res) => {
            resolve(res)
        }).catch( (res) => {
            reject(res);
        });
    })
}

 //sua
 update( id, data ){
    return new Promise( (resolve, reject) => {
        axios.put( this.api_url + '/' + id , data ).then( (res) => {
            resolve(res)
        }).catch( (res) => {
            reject(res);
        });
    })
}


}

export default new Book;
