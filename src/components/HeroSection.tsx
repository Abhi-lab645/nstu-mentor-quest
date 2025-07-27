import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Brain, Target, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-success/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 bg-primary/20 text-primary border-primary/30">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered NSAT Preparation
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent mb-6 animate-slide-up">
            Master Your
            <span className="block text-primary">NSAT Journey</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            The complete AI-powered platform for Newton Scholastic Aptitude Test preparation. 
            From mock tests to technical interviews - we've got you covered.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15%+</div>
              <div className="text-sm text-muted-foreground">Score Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">30%+</div>
              <div className="text-sm text-muted-foreground">Daily Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">80+</div>
              <div className="text-sm text-muted-foreground">Mock Questions</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button variant="hero" size="xl" className="group">
              Start Free Practice
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              <BookOpen className="w-5 h-5 mr-2" />
              View Curriculum
            </Button>
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/70 transition-all">
              <Target className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Adaptive Testing</h3>
              <p className="text-sm text-muted-foreground">AI-powered mock tests that adapt to your skill level</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/70 transition-all">
              <Brain className="w-8 h-8 text-success mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Smart Analytics</h3>
              <p className="text-sm text-muted-foreground">Detailed insights into your performance and growth</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/70 transition-all">
              <BookOpen className="w-8 h-8 text-warning mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Complete Prep</h3>
              <p className="text-sm text-muted-foreground">From aptitude to technical interviews - all in one place</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;