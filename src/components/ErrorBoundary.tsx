import React, { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
          <div className="text-center space-y-4">
            <h1 className="font-display text-4xl tracking-wider">Qualcosa è andato storto</h1>
            <p className="text-foreground/60 font-body">Ricarica la pagina per riprovare.</p>
            <button
              onClick={() => window.location.reload()}
              className="font-display text-sm tracking-widest uppercase border border-foreground/30 px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              RICARICA
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
