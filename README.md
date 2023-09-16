
# Course Registration

This is a simple project where JavaScript libray React is used. With the help of Vite a ready template to work with react is installed.


## Features

- using select button course is added to cart
- show toast based on some condtion to give message to the user
- responsive layout is provided
- same course can not be added multiple time
- credit hour can not exceed 20



## Discussion about state used in this project
In main component which is App.jsx I used 3 different state and 1 state in the Courses component. To do this I used useState() React Hook.

- one is for data loading which is used in the Courses component. There are two state, before data loading and after data loading. As my data is array of object. so initially i give an empty array in useState([]) Hook. Then after fetching data using useEffect() Hook, I set the data in the state. After that, I passed the data as props to it's children component Course.

Another 3 states are used in the App component.

- one of the state is used for cart data where an event will occur on the children component of App component but handler will be work on another children component. To accomplish this feature I had to use prop drilling technique. Where I sent the prop to it's children, then children to another children. Based on prop drilling some data is being set in the parent means App component then the data is passed as props to another children.

- others two state is used for showing some calculated result where those two state was number type.

