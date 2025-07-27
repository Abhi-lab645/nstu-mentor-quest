import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Brain, 
  Users, 
  MessageCircle, 
  BarChart3, 
  Video, 
  Trophy,
  Zap,
  ArrowRight,
  Clock,
  Target,
  Award
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mock Test Engine",
      description: "Real-time NSAT simulation with 80 MCQs, adaptive scoring, and authentic difficulty levels",
      badge: "Core Feature",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Curriculum Mapping",
      description: "Topic-wise modules aligned to Class 10–12 Maths, English, Logical Reasoning + Coding",
      badge: "Comprehensive",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Adaptive Practice",
      description: "AI-powered question recommendations based on your performance and learning patterns",
      badge: "AI-Powered",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Section-wise speed, accuracy tracking, score prediction, and detailed growth charts",
      badge: "Insights",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Interview Prep Zone",
      description: "Video lessons, mock interviews, coding challenges, and common Q&A sessions",
      badge: "Interview Ready",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Doubt Clearing",
      description: "Mentor-based chat/voice support with future AI-chatbot integration for instant help",
      badge: "24/7 Support",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Forums",
      description: "Peer discussion rooms, quiz battles, leaderboards, and gamified learning experience",
      badge: "Social Learning",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Payment & Scholarships",
      description: "Affordable crash courses (₹500–₹1,000) with scholarship-based access for top performers",
      badge: "Accessible",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  const nsatSteps = [
    {
      step: "01",
      title: "Aptitude Exam",
      description: "Master MCQs in Maths, English, and Logical Reasoning",
      icon: <Clock className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Maths Interview",
      description: "Practice advanced mathematical concepts and problem-solving",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Technical Interview", 
      description: "Prepare for coding challenges and technical discussions",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* NSAT Process Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
            <Zap className="w-4 h-4 mr-2" />
            NSAT 3-Step Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Master Every Step of NSAT
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform is structured around NSAT's unique 3-step evaluation process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {nsatSteps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                    {step.step}
                  </div>
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Complete Learning Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to excel in NSAT, powered by advanced AI and designed for GenZ learners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70">
              <CardHeader className="pb-4">
                <div className={`p-3 rounded-lg ${feature.bgColor} ${feature.color} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit text-xs">
                  {feature.badge}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-primary border-0 text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your NSAT Preparation?</h3>
              <p className="text-primary-foreground/80 mb-6">
                Join thousands of students who have improved their NSAT scores with our AI-powered platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  View Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;