import axios from "axios";

class Job {
  constructor() {
    //khai bao thuoc tinh
    this.api_url = "https://654c32aa77200d6ba8589bbf.mockapi.io/Job";
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

  // async getAll(){
  //     return await axios.get(this.api_url)
  // }

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

  //sua
  update( id, data ){
		return new Promise( (reslove, reject) => {
			axios.put( this.api_url + '/' + id , data ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}


}

export default new Job;
