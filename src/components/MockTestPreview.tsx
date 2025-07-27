import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  Brain, 
  Calculator, 
  BookOpen,
  Code,
  Play,
  BarChart3,
  Target,
  Timer
} from "lucide-react";

const MockTestPreview = () => {
  const subjects = [
    { name: "Mathematics", questions: 25, icon: <Calculator className="w-5 h-5" />, color: "text-primary", bgColor: "bg-primary/10" },
    { name: "English", questions: 25, icon: <BookOpen className="w-5 h-5" />, color: "text-success", bgColor: "bg-success/10" },
    { name: "Logical Reasoning", questions: 20, icon: <Brain className="w-5 h-5" />, color: "text-warning", bgColor: "bg-warning/10" },
    { name: "Coding Aptitude", questions: 10, icon: <Code className="w-5 h-5" />, color: "text-destructive", bgColor: "bg-destructive/10" }
  ];

  const mockResults = {
    totalQuestions: 80,
    attempted: 72,
    correct: 58,
    incorrect: 14,
    timeSpent: "78 min",
    accuracy: 80.6,
    score: 725
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
            <Target className="w-4 h-4 mr-2" />
            Mock Test Engine
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Experience Real NSAT Conditions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice with our adaptive AI engine that simulates actual NSAT difficulty and timing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Test Interface Preview */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-primary" />
                    NSAT Mock Test #47
                  </CardTitle>
                  <Badge variant="outline" className="border-warning text-warning">
                    <Clock className="w-4 h-4 mr-1" />
                    42:18 remaining
                  </Badge>
                </div>
                <CardDescription>
                  Question 23 of 80 • Mathematics Section
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm font-medium">
                  If log₂(x) + log₂(y) = 5 and log₂(x) - log₂(y) = 1, find the value of xy.
                </div>
                <div className="space-y-3">
                  {['A) 32', 'B) 64', 'C) 96', 'D) 128'].map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-border/50 hover:bg-muted/50 cursor-pointer transition-colors">
                      <div className="w-6 h-6 rounded-full border-2 border-border"></div>
                      <span className="text-sm">{option}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="outline" size="sm">Mark for Review</Button>
                  <Button variant="default" size="sm">Next Question</Button>
                </div>
              </CardContent>
            </Card>

            {/* Subject Breakdown */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Test Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {subjects.map((subject, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <div className={`p-2 rounded ${subject.bgColor} ${subject.color}`}>
                        {subject.icon}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{subject.name}</div>
                        <div className="text-xs text-muted-foreground">{subject.questions} questions</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results & Analytics */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-success" />
                  Your Latest Performance
                </CardTitle>
                <CardDescription>
                  Mock Test #46 - Completed 2 days ago
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Score Circle */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-primary">
                    <div className="text-2xl font-bold text-primary-foreground">{mockResults.score}</div>
                    <div className="absolute -bottom-6 text-sm text-muted-foreground">NSAT Score</div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-success/10">
                    <div className="text-2xl font-bold text-success">{mockResults.accuracy}%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">{mockResults.timeSpent}</div>
                    <div className="text-sm text-muted-foreground">Time Spent</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Questions Attempted</span>
                      <span>{mockResults.attempted}/{mockResults.totalQuestions}</span>
                    </div>
                    <Progress value={(mockResults.attempted / mockResults.totalQuestions) * 100} className="h-2" />
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>{mockResults.correct} Correct</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive" />
                      <span>{mockResults.incorrect} Incorrect</span>
                    </div>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  <Play className="w-5 h-5 mr-2" />
                  Start New Mock Test
                </Button>
              </CardContent>
            </Card>

            {/* Features Highlight */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Adaptive Difficulty</div>
                    <div className="text-xs text-muted-foreground">Questions adjust to your skill level</div>
                  </div>
                </div>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-success/10 text-success">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Real-time Analysis</div>
                    <div className="text-xs text-muted-foreground">Instant feedback and improvement tips</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockTestPreview;