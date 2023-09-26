import React from 'react'
import './styles.css'



function List() {
  
  const Style= {
    color: "#000000", 
    marginLeft: "-100px", 
    marginTop: "-10px"
  }

  const Style1= {
    color: "#000000",
    marginLeft: "-100px",
    marginTop: "-1px"
  }

  const Style2= {
    color: "#000000",
     marginLeft: "-40px",
      marginTop: "-10px"
  }

  const Style3= {
    color: "#000000",
     marginLeft: "-40px", 
     marginTop: "-1px"
  }

  const Style4= {
    color: "#000000", 
    marginLeft: "70px", 
    marginTop: "-11px"
  }

  const Style5= {
    color: "#000000", 
    marginLeft: "70px", 
    marginTop: "-1px"
  }
  
  
  
  
  
  
  
  
  
  return (
 <div className="main">  
  <div className="container">
  <div className="input-container small-input">
    <input
      type="text"
      placeholder="Region: All"
      className="filter-input"
    />
    <img 
      width="24" height="24" 
      src="https://img.icons8.com/material-rounded/24/chevron-down.png" 
      alt="chevron-down"
      className="icon"
    />
  </div>
  <div className="search-box">
    <div className="input-container">
      <input
        className="input-box"
        type="text"
        placeholder="Search on Name or Capital"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 26 26"
        className="search-icon"
      >
        <path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"></path>
      </svg>
    </div>
  </div>
</div>



    <div className="range">
   <p>Population Range 
    <span className="box">Min</span>to
    <span className="box">Max</span></p>
</div>

<div className="table-container">
    
  <table>
      <thead>
          <tr>
              <th className="name">Name
                <div className="icon-container">
                    <i className="fa-solid fa-sort-up fa-lg" style={Style} ></i>
                    <i className="fa-solid fa-sort-down fa-lg" style={Style1}></i>
                  </div>
                  
              </th>
              <th>Region
                <div className="icon-container">
                    <i className="fa-solid fa-sort-up fa-lg" style={Style2}></i>
                    <i className="fa-solid fa-sort-down fa-lg" style={Style3}></i>
                  </div>
              </th>
              <th>ISO Code</th>
              <th>Currency</th>
              <th>Population
                <div className="icon-container">
                    <i className="fa-solid fa-sort-up fa-lg" style={Style4} ></i>
                    <i className="fa-solid fa-sort-down fa-lg" style={Style5}></i>
                  </div>
              </th>
              <th>Capital</th>
          </tr>
          <tbody>
            <tr>
                <td className="country">(img)India</td>
                <td>Asia</td>
                <td>IN</td>
                <td>INR</td>
                <td>1000000</td>
                <td>New Delhi</td>
            </tr>
            <tr>
                <td className="country">(img)United States</td>
                <td>North America</td>
                <td>US</td>
                <td>USD</td>
                <td>2000000</td>
                <td>Washington, D.C.</td>
            </tr>
            <tr>
              <td className="country">(img)Germany</td>
              <td>Europe</td>
              <td>GER</td>
              <td>EUR</td>
              <td>2000000</td>
              <td>Berlin</td>
          </tr>
            
           
        </tbody>
      </thead>
      </table>
</div>
</div>
 
  )
}

export default List
