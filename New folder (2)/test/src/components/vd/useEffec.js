import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []); // Thực hiện side effect chỉ một lần sau khi thành phần được hiển thị lần đầu

  return (
    <div>
      {/* Hiển thị dữ liệu */}
    </div>
  );
}