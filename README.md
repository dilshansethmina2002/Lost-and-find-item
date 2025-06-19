# Lost and Find Item

A web application for reporting and searching lost and found items, built with React and Vite.

## Features

- **Add Lost/Found Items:** Report lost or found items with details, images, and location.
- **Recent Items:** View recently reported items in a card-based layout.
- **Sidebar Navigation:** Easy access to dashboard, personal items, notifications, and help.
- **Responsive UI:** Modern interface using Bootstrap and CoreUI.
- **Animated Headings:** Eye-catching animated "Lost Found" text.

## Tech Stack

- React
- Vite
- Bootstrap
- CoreUI React
- @react-google-maps/api
- Framer Motion

## Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/lost-and-find-item.git
   cd "Front End/Lost And Find Item"
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Lint the Code

```sh
npm run lint
```

## Project Structure

```
src/
  AddLostItem.jsx
  AddFoundItem.jsx
  Dashbord.jsx
  ItemCard.jsx
  LostFoundText.jsx
  LocationPicker.jsx
  MyLostItem.jsx
  MyFoundItem.jsx
  ResentItem.jsx
  SideBar.jsx
  ...
```

## Configuration

- **Google Maps API Key:**  
  The API key is currently hardcoded in `LocationPicker.jsx`.  
  For production, use environment variables or a secure method to store API keys.

## License

MIT License

---

*Made with ❤️ using React
