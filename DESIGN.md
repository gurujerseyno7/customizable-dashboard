# Dependencies Used

Primary dependencies used in this project include Zustand for state management, Tailwind CSS for styling, and Recharts for data visualization,Tanstack query for data fetching, react-grid layout for customizing grid designs.

# Zustand Store architecture

Store configuration for handling charts and layouts has been handled in single store so it must be centralized single source of truth. The data has also been persisted with zustand . In the store breakpoint, chartlayouts, categories and dashboard mock datas are included so data can be accessed from single source as both layouts and charts are related. But separate store for layouts and dashboard could also be an option.

# Grid Layout and State Management

Separate state for breakpoints, layouts has been defined and managed.Layout state has been continuosly updated on every layout changes.Based on the grid layout the widgets also frequently updated based on the grid layout properties.

# Performance bottlenecks 

Managing states of grid layouts with widget components plays a crucial role to persist the layouts. However it is effficiently handles with zustand .