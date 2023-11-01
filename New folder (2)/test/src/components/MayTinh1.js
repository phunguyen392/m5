import React, { useEffect, useState } from 'react';

const Maytinh1 = () => {
    const [soA, setSoA] = useState(0);
    const [soB, setSoB] = useState(0);
    const [ketQua, setKq] = useState('');
    const [ToanTu, setToanTu] = useState('');

    useEffect(() => {
        console.log("co gia tri thay doi");
    });

    useEffect(() => {
    console.log('chay lan dau tien');    

    },[]);

    useEffect(() => {
        console.log('khi ket qua thay doi');
    }, [ketQua]);

    const setSoAValue = (e) => {
        setSoA(e.target.value )
    }
   const setSoBValue = (e) => {
        setSoB(e.target.value )
    }

    const xuLyCong = () => {
        let soAValue = parseInt(soA);
        let soBValue = parseInt(soB);
        let kq = soAValue + soBValue;
        setKetQua(kq)} 


    return (
        <div>
            SoA: {soA} -
            SoB: {soB}
            <br />
            {/* So thu nhat: <input type='number' onChange={this.setSoA} /> <br/>
        So thu hai: <input type='number' onChange={this.setSoB}/> <br/> */}
            So thu nhat: <input type='number' name='soA' onChange={() => setSoA(this.target.value)} /> <br />
            So thu hai: <input type='number' name='soB' onChange={() => setSoB(this.target.value)} /> <br />
            <button onClick={this.xuLyCong}> + </button>
            <button onClick={this.xuLyTru}> - </button>
            <button onClick={this.xuLyNhan}> x </button>
            <button onClick={this.xuLyChia}> / </button>
            <br />
            Ket qua la: {ketQua}
        </div>
    );
}

export default Maytinh1;
