# 🌍 Weather Report Application

## 📖 Overview

The Weather Report Application is a modern web application built with **React**, **Axios**, and **Tailwind CSS** that allows users to search for real-time weather information for any city around the world.

The application fetches live weather data from the OpenWeatherMap API and presents it in a clean, user-friendly interface.

---

## ✨ Features

✅ Search weather by city name

✅ View current weather conditions

✅ Display temperature information

✅ Show detailed weather description

✅ Handle invalid city names gracefully

✅ Responsive design for desktop and mobile devices

✅ Fast API integration using Axios

---

## 🖥️ Demo

Enter a city name and click **Get Report** to instantly view:

* Weather Condition
* Temperature
* Weather Description

---

## 🛠️ Built With

| Technology         | Purpose            |
| ------------------ | ------------------ |
| React JS           | Frontend Framework |
| Axios              | API Requests       |
| Tailwind CSS       | Styling            |
| OpenWeatherMap API | Weather Data       |

---

## 📂 Project Structure

```bash
src/
│
├── App.jsx
├── Weather.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation Guide

### Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
```

### Move to Project Directory

```bash
cd weather-app
```

### Install Dependencies

```bash
npm install
```

### Install Axios

```bash
npm install axios
```

### Run the Application

```bash
npm run dev
```

---

## 🔗 API Used

OpenWeatherMap API provides real-time weather information for cities worldwide.

API Endpoint:

```text
https://api.openweathermap.org/data/2.5/weather
```

Example Request:

```javascript
axios(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
)
```

---

## 📸 Application Preview

### Home Screen

* Enter City Name
* Click Get Report
* View Weather Information

Example Output:

```text
Weather : Clouds
Temperature : 30°C
Description : scattered clouds
```

---

## 🚀 Future Enhancements

* Weather Icons
* Humidity Information
* Wind Speed Details
* Sunrise & Sunset Timing
* 5-Day Forecast
* Current Location Weather
* Dark Mode Support

---

## 🎓 Learning Outcomes

This project helped in understanding:

* React Functional Components
* useState Hook
* Event Handling
* API Integration
* Axios Requests
* Error Handling
* Conditional Rendering
* Tailwind CSS Styling

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it with others!

Happy Coding! 🚀
