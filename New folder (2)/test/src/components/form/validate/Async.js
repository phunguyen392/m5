const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
 
 const validate = (values, props /* only available when using withFormik */) => {
   return sleep(2000).then(() => {
     const errors = {};
     if (['admin', 'null', 'god'].includes(values.username)) {
       errors.username = 'Nice try';
     }
     // ...
     return errors;
   });
 };