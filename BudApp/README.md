# BudApp - Expo React Native Application

A modern, feature-rich mobile application built with Expo and React Native.

## Features

- 🌱 **Bud Management**: Add, view, and organize your buds with categories
- 👤 **User Profile**: Customizable profile with settings and statistics
- 🎨 **Beautiful UI**: Modern design with gradients and smooth animations
- 📱 **Cross-Platform**: Works on both iOS and Android
- ⚡ **Fast Development**: Built with Expo for rapid development and deployment

## Tech Stack

- **Framework**: Expo SDK 51
- **Language**: TypeScript
- **Navigation**: Expo Router
- **UI Components**: React Native with custom styling
- **Icons**: Expo Vector Icons
- **Gradients**: Expo Linear Gradient

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device (for testing)

### Installation

1. Clone the repository
2. Navigate to the BudApp directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npm start
   ```

2. Use Expo Go app to scan the QR code and run the app on your device

3. For specific platforms:
   ```bash
   npm run android  # Run on Android
   npm run ios      # Run on iOS
   npm run web      # Run on web
   ```

## Project Structure

```
BudApp/
├── app/                 # App screens and navigation
│   ├── _layout.tsx     # Root layout with navigation
│   ├── index.tsx       # Home screen (Bud management)
│   └── profile.tsx     # Profile screen
├── assets/             # Static assets (images, icons)
├── app.json           # Expo configuration
├── package.json       # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Key Features

### Home Screen
- Add new buds with categories
- View all buds in a beautiful card layout
- Delete buds with confirmation
- Category-based organization
- Empty state handling

### Profile Screen
- Editable user information
- Settings toggles (notifications, dark mode)
- User statistics display
- Action buttons for app features
- Logout functionality

## Building for Production

### Android
```bash
npm run build:android
```

### iOS
```bash
npm run build:ios
```

## Customization

The app uses a consistent design system with:
- Color palette based on green theme (#4CAF50)
- Gradient backgrounds
- Card-based layouts
- Consistent spacing and typography
- Smooth animations and transitions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.