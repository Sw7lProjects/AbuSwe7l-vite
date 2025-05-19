import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AuthCallback = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get access token from URL hash
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const accessToken = params.get("access_token");

        if (!accessToken) {
          throw new Error("No access token found");
        }

        // Get user information using the access token
        const userResponse = await fetch("https://discord.com/api/users/@me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!userResponse.ok) {
          throw new Error("Failed to get user information");
        }

        const userData = await userResponse.json();

        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("access_token", accessToken);

        // Redirect to home page
        navigate("/");
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      }
    };

    handleCallback();
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-dark">
        <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
        <Card className="w-[400px] bg-background-light border-border shadow-glow-lg animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent className="text-text-secondary text-center">
            <p>{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-dark">
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      <Card className="w-[400px] bg-background-light border-border shadow-glow-lg animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-text">Signing in...</CardTitle>
        </CardHeader>
        <CardContent className="text-text-secondary text-center">
          <p>Please wait while we complete the sign in process</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCallback; 