import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";


const SalesCharts =({category,product,brand})=> {

    const [options, setOject] = useState({
        chart: { id: 'bar-chart'},
        xaxis: {
            categories: ["Enero","Febrero","Marzo","Abril","Mayo"]
        }
    });

    const [series, setSeries] = useState([{
        name: "Ventas",
        data: [444,52,356,76,45],
    }]);    

    const toolbar = {
        show: true
    };

    const sparkline= {
        enabled: false
    };
    
    const url = "http://localhost:3001/inventory?product="+ product + "&brand=" + brand + "&category=" +category;

    useEffect(() =>{
        
        const amounts=[];
        const months =[];

        axios.get(url).then( response =>{
            response.data.map(item =>{
                amounts.push(item.amount)
                months.push(item.month)
            });

            setOject({
                chart: { id: 'bar-chart'},
                xaxis: {
                    categories: months
                }
            });

            setSeries([{
                name: "Ventas",
                data: amounts,
            }]);

        }).catch(e =>{
            alert(e);
        })
    },[]);

    return (
        <Chart  options={options}
                series={series}
                type="bar"
                height= {500}
                // width=  {700}
                toolbar= {toolbar}
                sparkline= {sparkline}
        />
    )
  }
  
  export default SalesCharts;