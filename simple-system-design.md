# Nuclea - Simple System Design

## Overview
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              NUCLEA APPLICATION                                │
│                    Nuclear Technology Education Platform                        │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Simple Architecture
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND (Next.js)                               │
└─────────────────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   PAGES         │ │   COMPONENTS    │ │   EXTERNAL      │
│                 │ │                 │ │   SERVICES      │
│ • Home          │ │ • Navigation    │ │ • Dialogflow    │
│ • About         │ │ • UI Elements   │ │ • Google Forms  │
│ • Blog          │ │ • Quiz Logic    │ │ • Netlify Game  │
│ • Quiz          │ │ • Layout        │ │                 │
│ • Buy           │ │ • Forms         │ │                 │
│ • Chatbot       │ │                 │ │                 │
└─────────────────┘ └─────────────────┘ └─────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              DEPLOYMENT (Vercel)                              │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Page Structure
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              PAGE COMPONENTS                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
                    │               │               │
                    ▼               ▼               ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ HOME        │ │ ABOUT       │ │ BLOG        │ │ QUIZ        │
│             │ │             │ │             │ │             │
│ • Hero      │ │ • Team Info │ │ • Articles  │ │ • Kids Quiz │
│ • Features  │ │ • Mission   │ │ • Search    │ │ • Adult Quiz│
│ • Fellowship│ │ • Values    │ │ • Categories│ │ • Results   │
│ • Pricing   │ │ • Story     │ │ • Filtering │ │ • Scoring   │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
                    │               │
                    ▼               ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ BUY         │ │ CHATBOT     │ │             │
│             │ │             │ │             │
│ • Products  │ │ • AI Chat   │ │             │
│ • Categories│ │ • Nuclear Q&A│ │             │
│ • Search    │ │ • Embedded  │ │             │
│ • Filter    │ │ • Responsive│ │             │
└─────────────┘ └─────────────┘ └─────────────┘
```

## Data Flow
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              SIMPLE DATA FLOW                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
                    │               │               │
                    ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   USER INPUT    │ │   PROCESSING    │ │   OUTPUT        │
│                 │ │                 │ │                 │
│ • Quiz Answers  │ │ • Quiz Logic    │ │ • Results       │
│ • Search Query  │ │ • Search Filter │ │ • UI Update     │
│ • Form Data     │ │ • State Update  │ │ • Navigation    │
│ • Navigation    │ │ • Validation    │ │ • External API  │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

## External Services
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              EXTERNAL INTEGRATIONS                             │
└─────────────────────────────────────────────────────────────────────────────────┘
                    │               │               │
                    ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   DIALOGFLOW    │ │   GOOGLE FORMS  │ │   NETLIFY       │
│                 │ │                 │ │                 │
│ • AI Chatbot    │ │ • Applications  │ │ • Game Hosting  │
│ • Nuclear Q&A   │ │ • Data Collection│ │ • Static Site   │
│ • Embedded API  │ │ • Email Notify  │ │ • CDN           │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

## Tech Stack
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              TECHNOLOGY STACK                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
                    │               │               │
                    ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   FRONTEND      │ │   STYLING       │ │   DEPLOYMENT    │
│                 │ │                 │ │                 │
│ • Next.js 14    │ │ • Tailwind CSS  │ │ • Vercel        │
│ • React 18      │ │ • Responsive    │ │ • Auto Deploy   │
│ • TypeScript    │ │ • Dark Theme    │ │ • CDN           │
│ • App Router    │ │ • Custom CSS    │ │ • SSL           │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

## Key Features
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              CORE FEATURES                                     │
└─────────────────────────────────────────────────────────────────────────────────┘
                    │               │               │
                    ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   EDUCATION     │ │   INTERACTION   │ │   COMMERCE      │
│                 │ │                 │ │                 │
│ • Blog Articles │ │ • AI Chatbot    │ │ • Product Store │
│ • Quiz System   │ │ • Interactive   │ │ • Categories    │
│ • Visual Data   │ │   Quizzes       │ │ • Search/Filter │
│ • Learning Path │ │ • Game          │ │ • Pricing       │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

## Simple User Journey
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              USER JOURNEY                                      │
└─────────────────────────────────────────────────────────────────────────────────┘
                    │               │               │
                    ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   LANDING       │ │   EXPLORATION   │ │   ENGAGEMENT    │
│                 │ │                 │ │                 │
│ • Home Page     │ │ • Blog Reading  │ │ • Quiz Taking   │
│ • Navigation    │ │ • Product Browse│ │ • Chatbot Use   │
│ • Features      │ │ • About Learn   │ │ • Game Play     │
│ • CTA Buttons   │ │ • Search/Filter │ │ • Social Share  │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

## Summary

### What Nuclea Does:
- **Educational Platform** for nuclear technology
- **Interactive Learning** with quizzes and games
- **AI-Powered Chat** for nuclear science questions
- **Product Showcase** of nuclear technology applications
- **Team Information** and fellowship program

### How It Works:
1. **Frontend**: Next.js app with React components
2. **Pages**: Home, About, Blog, Quiz, Buy, Chatbot
3. **External Services**: Dialogflow (AI), Google Forms (Applications), Netlify (Game)
4. **Deployment**: Vercel with CDN and SSL

### Key Technologies:
- **Next.js 14** + **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **Vercel** for deployment
- **External APIs** for specialized features

This simplified design shows the essential components without overwhelming detail, making it easy to understand the core architecture of your Nuclea application. 