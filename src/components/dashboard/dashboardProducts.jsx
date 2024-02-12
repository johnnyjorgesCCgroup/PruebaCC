import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: ["red", "blue", "yellow"],
      hoverOffset: 30,
    },
  ],
};

const options = {
  responsive: true,
};


export default function dashboardProducts() {
 

  return (
    <div className="content-wrapper">
      <div className="card" style={{ padding: 20 }}>
        <div className="card card-outline">
          <div className="card-header">
            <h3 className="card-title">
              <b style={{textAlign:"center"}}>Dashboard Products</b>
            </h3>
          </div>
          <div
            className="card-body table-responsive p-0 mt-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: 300 }}>
              <Doughnut data={data} options={options} />
            </div>
            <div>
              <div className="card bg-light mb-3">
                <div className="card-header">Stock de productos</div>
                <div className="card-body">
                  <p className="card-text">
                    <h2>#</h2>
                  </p>
                </div>
              </div>
              <div className="card bg-light mb-3">
                <div className="card-header">Stock Producto Favorito</div>
                <div className="card-body">
                  <p className="card-text">
                    <h2>#</h2>
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-2">
              <div className="card border-success mb-3">
                <div className="card-header text-success">Costo Total Stock</div>
                <div className="card-body">
                  <p className="card-text text-success">
                    <h2>$</h2>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer clearfix"></div>
        </div>
      </div>
    </div>
  );
}
