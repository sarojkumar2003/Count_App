# ⚛️ React Counter App – With Animated Reset 🔄

![React Counter App Preview](assets/images/count-images.png)

Welcome to the **React Counter App** – a clean, interactive, and modern counter built using **Vite + React**. This app is not just functional – it’s smooth, animated, and beautiful to use.

---

## ✨ Features

- 🔢 **Increment / Decrement Buttons**
- 🔄 **Animated Reset** – count decreases step-by-step until it hits zero
- 🎨 **Modern UI** – gradient background with glassmorphism
- 🎭 **Smooth Transitions** – for visual appeal
- ⚡ **Built with Vite** – fast development experience
- 💻 **Responsive Design** – works well on all screen sizes
- 🧩 **React Icons** – stylish button icons

---

## 🎞️ Animated Reset Explained

Instead of instantly resetting the count to 0, the app **animates** the count:

- If the count is `10`, it goes `10 → 9 → 8 → ... → 0`
- If the count is `-5`, it goes `-5 → -4 → -3 → ... → 0`
- Smooth animation with timed steps (100ms per change)

It gives a **more natural feel** when resetting the counter.

---

## 🚀 Getting Started

### 🔧 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/react-counter-app.git

# 2. Navigate into the directory
cd react-counter-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
