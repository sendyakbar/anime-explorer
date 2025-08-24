# AnimeExplorer

A React Native application for exploring top anime using the Jikan API (MyAnimeList). The app features infinite scrolling, favorites management, and detailed anime information.

## Features

- Browse top anime with infinite scrolling
- View detailed anime information including synopsis, genres, and ratings
- Add/remove anime to/from favorites with persistent storage
- Bottom tab navigation between anime list and favorites
- Optimized performance with Redux Toolkit Query caching

## Instructions to Run the App

### Prerequisites

- Node.js >= 20.19.4
- React Native development environment set up
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and Android SDK

### Installation

1. **Clone the repository and install dependencies:**
   ```bash
   cd AnimeExplorer
   yarn install
   ```

2. **iOS Setup (if running on iOS):**
   ```bash
   # Install Ruby bundler dependencies
   bundle install
   
   # Install CocoaPods dependencies
   cd ios && pod install && cd ..
   ```

3. **Start Metro bundler:**
   ```bash
   yarn start
   ```

4. **Run the app:**
   
   For iOS:
   ```bash
   yarn ios
   ```
   
   For Android:
   ```bash
   yarn android
   ```

### Development Commands

- `yarn start` - Start Metro bundler
- `yarn ios` - Run on iOS simulator
- `yarn android` - Run on Android emulator
- `yarn lint` - Run ESLint

## Known Limitations and Trade-offs

### Technical Limitations

1. **API Rate Limiting**: The Jikan API has rate limits that may cause slow loading during heavy usage
2. **Image Loading**: Large anime poster images may cause performance issues on slower devices
3. **Offline Support**: No offline functionality - requires internet connection to fetch data
4. **Search Functionality**: Currently only displays top anime; no search or filtering capabilities

### Architecture Trade-offs

1. **Bundle Size**: Including React Navigation, Redux Toolkit, and Reanimated increases app size
2. **Memory Usage**: Infinite scrolling keeps all loaded data in memory (though paginated)
3. **State Persistence**: Only favorites are persisted; scroll position and cache reset on app restart
4. **Platform Differences**: Some styling and navigation behaviors may differ between iOS and Android

### Future Improvements

- Add search and filtering functionality
- Implement image caching and optimization
- Add offline support with local database
- Implement pull-to-refresh functionality
- Add user authentication and cloud sync for favorites

## Thought Process and Architecture Decisions

### Overall Architecture

I chose a **layered architecture** with clear separation of concerns:

```
├── App.tsx (Root component with providers)
├── src/
│   ├── components/ (Reusable UI components)
│   ├── screens/ (Feature-based screen components)
│   ├── navigation/ (React Navigation setup)
│   ├── store/ (Redux store, slices, and API)
│   ├── hooks/ (Custom React hooks)
│   ├── types/ (TypeScript type definitions)
│   ├── themes/ (Design system tokens)
│   └── styles/ (Shared styling utilities)
```

### Key Architectural Decisions

#### 1. State Management - Redux Toolkit + RTK Query
**Decision**: Used Redux Toolkit with RTK Query for state management and API calls.

**Reasoning**:
- **Caching**: RTK Query provides automatic caching and background refetching
- **Infinite Scrolling**: Custom merge function handles paginated data efficiently
- **Predictable State**: Redux ensures predictable state updates across the app
- **DevTools**: Excellent debugging experience with Redux DevTools

#### 2. Navigation - React Navigation v7 with Static Configuration
**Decision**: Used React Navigation with static configuration instead of dynamic.

**Reasoning**:
- **Type Safety**: Better TypeScript integration with static configuration
- **Performance**: Compile-time navigation structure reduces runtime overhead
- **Maintainability**: Centralized navigation configuration is easier to manage

#### 3. Data Persistence - Redux Persist with AsyncStorage
**Decision**: Used Redux Persist to persist only the favorites slice.

**Reasoning**:
- **Selective Persistence**: Only persist user data (favorites), not API cache
- **Performance**: Avoid persisting large amounts of API data
- **Storage Efficiency**: AsyncStorage handles small amounts of data efficiently

#### 4. Component Organization - Feature-Based Structure
**Decision**: Organized components by feature/screen rather than by type.

**Reasoning**:
- **Colocation**: Related components stay together (easier maintenance)
- **Scalability**: Easy to add new features without reorganizing
- **Context**: Screen-specific hooks and components are co-located

#### 5. Styling Strategy - Theme-Based Design System
**Decision**: Created a design system with centralized tokens for colors, spacing, and typography.

**Reasoning**:
- **Consistency**: Ensures consistent visual design across the app
- **Maintainability**: Easy to update design system globally
- **Scalability**: New components can easily adopt the design system
- **Brand Cohesion**: Centralized theming enables easy brand updates

#### 6. Performance Optimizations
**Decisions Made**:
- **FlatList**: Used for efficient rendering of large lists
- **Image Optimization**: Placeholder images while loading
- **Memoization**: Strategic use of React.memo and useMemo
- **Lazy Loading**: Components and data loaded as needed

### Design Patterns Used

1. **Provider Pattern**: App wrapped with Redux Provider and PersistGate
2. **Custom Hooks**: Encapsulated complex logic in reusable hooks
3. **Composition**: Small, focused components composed together
4. **Dependency Injection**: Services and APIs injected through Redux store

### Why These Choices Work Well Together

- **Redux + React Navigation**: Excellent integration for navigation state management
- **TypeScript + Static Navigation**: Compile-time safety for navigation
- **Feature-based Organization**: Makes the codebase scalable and maintainable
- **Design System**: Ensures consistent user experience across all screens

This architecture provides a solid foundation for a production app while maintaining simplicity and developer experience.
