import './App.css';


function App() {
  // const name="Latha"
  // const pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTraORMV35k_0Uv9MhnStjbKlr_xtrJw8S2RDbfXH9TYzeMKTSD2qf_ug6thGL-mFyx4Hc&usqp=CAU"

  // const user={name:"Arun",pic:"https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/new-7-series-exterior-right-front-three-quarter.jpeg?isig=0&q=80"}

  const users=[
    {name:"Arun",pic:"https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/new-7-series-exterior-right-front-three-quarter.jpeg?isig=0&q=80"},
    {
      name:"Ponraj",pic:"https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg"
    },
    {
      name:"Sakthi",pic:"https://i0.wp.com/m.media-amazon.com/images/I/61QFtjVVy5L._AC_SL1024_.jpg?ssl=1"
    },
    {
      name:"Sakthi",pic:"https://i0.wp.com/m.media-amazon.com/images/I/61QFtjVVy5L._AC_SL1024_.jpg?ssl=1"
    },
    {
      name:"Sakthi",pic:"https://i0.wp.com/m.media-amazon.com/images/I/61QFtjVVy5L._AC_SL1024_.jpg?ssl=1"
    },
    {
      name:"Sakthi",pic:"https://i0.wp.com/m.media-amazon.com/images/I/61QFtjVVy5L._AC_SL1024_.jpg?ssl=1"
    }
  ]
  //Jsx starts
  return (
    <div className='App'>
      {/* <img src={user.pic} className='profile-pic' />
     <h2 className='hello-msg'>Hello {user.name}</h2> */}

     {
      users.map(user=>
        <div className='user-info'>
           <img src={user.pic} className='profile-pic' />
           <h2 className='hello-msg'>Hello {user.name}</h2>
        </div>

      )
     }
    </div>
  );
  //JSX ends
}

export default App;
