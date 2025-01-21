import React, { useEffect, useState } from "react";
import styles from "./styles/userList.module.css";
import stats from "../../assets/images/Stats.png";
import search from "../../assets/icons/search.png"
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/user/getUser");
        const data = await response.json();
        
  
        if (response.ok && data.users) {
          setUsers(data.users);  
        } else {
          console.error("No users found or error in response:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    
    fetchUsers();
  }, []); 

  
  const filteredUsers = users.filter((user) => {
    return (
      user.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.contactNo.toString().includes(searchQuery)
    );
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Dashboard</h2>
        <p>01 - 25 March, 2020</p>
        <img src={stats} alt="stats" style={{ width: "510px" }} />
      </div>
      <div className={styles.content}>
        <h3>User List</h3>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange} 
          />
          <button><img src={search} alt="search-icon" className={styles.sIcon}/></button>
        </div>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>Name</span>
            <span>Email</span>
            <span>Phone</span>
            <span>Status</span>
            <span>View</span>
          </div>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div className={styles.tableRow} key={index}>
                <span>{user.fname} {user.lname}</span>
                <span>{user.email}</span>
                <span>{user.contactNo}</span>
                <span>{user.status}</span>
                <button className={styles.viewButton}>View</button>
              </div>
            ))
          ) : (
            <div>No users found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
