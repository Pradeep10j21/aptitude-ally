import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingParticles from '@/components/assessment/FloatingParticles';
import WelcomeScreen from '@/components/assessment/WelcomeScreen';
import InstructionsScreen from '@/components/assessment/InstructionsScreen';
import ProgressIndicator from '@/components/assessment/ProgressIndicator';
import Timer from '@/components/assessment/Timer';
import QuestionCard from '@/components/assessment/QuestionCard';
import AnswerOption from '@/components/assessment/AnswerOption';
import SuccessFeedback from '@/components/assessment/SuccessFeedback';
import LearningMode from '@/components/assessment/LearningMode';
import SummaryScreen from '@/components/assessment/SummaryScreen';
import { questions, getCategoryLabel } from '@/data/questions';
import { 
  AssessmentPhase, 
  FeedbackState, 
  UserAnswer, 
  AssessmentResult, 
  Question 
} from '@/types/assessment';

const AssessmentPage = () => {
  const [phase, setPhase] = useState<AssessmentPhase>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedbackState, setFeedbackState] = useState<FeedbackState>('none');
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [totalTime, setTotalTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(0);
  const [isReinforcementQuestion, setIsReinforcementQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[0]);

  const handleStartInstructions = () => {
    setPhase('instructions');
  };

  const handleBeginAssessment = () => {
    setPhase('assessment');
    setIsTimerRunning(true);
    setQuestionStartTime(totalTime);
    setCurrentQuestion(questions[0]);
  };

  const handleSelectAnswer = (index: number) => {
    if (feedbackState !== 'none') return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const timeSpent = totalTime - questionStartTime;

    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      timeSpent,
      attempts: 1,
      learningRecovery: false,
    };

    setUserAnswers((prev) => [...prev, answer]);
    setFeedbackState(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      setCompletedQuestions((prev) => [...prev, currentQuestionIndex + 1]);
    }
  };

  const handleContinue = () => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex >= questions.length) {
      setIsTimerRunning(false);
      calculateResult();
      setPhase('summary');
    } else {
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
      setSelectedAnswer(null);
      setFeedbackState('none');
      setQuestionStartTime(totalTime);
      setIsReinforcementQuestion(false);
    }
  };

  const handleTrySimilar = () => {
    if (currentQuestion.reinforcementQuestion) {
      setCurrentQuestion(currentQuestion.reinforcementQuestion);
      setSelectedAnswer(null);
      setFeedbackState('none');
      setIsReinforcementQuestion(true);
      setQuestionStartTime(totalTime);
    }
  };

  const calculateResult = useCallback(() => {
    const correctAnswers = userAnswers.filter((a) => a.isCorrect).length;
    const accuracy = Math.round((correctAnswers / questions.length) * 100);

    const categoryScores: AssessmentResult['categoryScores'] = {};
    const categories = ['quantitative', 'logical', 'verbal', 'analytical'];

    categories.forEach((category) => {
      const categoryQuestions = questions.filter((q) => q.category === category);
      const categoryAnswers = userAnswers.filter((a) =>
        categoryQuestions.some((q) => q.id === a.questionId)
      );
      const correct = categoryAnswers.filter((a) => a.isCorrect).length;
      const total = categoryQuestions.length;

      if (total > 0) {
        categoryScores[category] = {
          correct,
          total,
          percentage: Math.round((correct / total) * 100),
        };
      }
    });

    const strengths: string[] = [];
    const improvements: string[] = [];

    Object.entries(categoryScores).forEach(([category, score]) => {
      if (score.percentage >= 75) {
        strengths.push(getCategoryLabel(category));
      } else if (score.percentage < 50) {
        improvements.push(getCategoryLabel(category));
      }
    });

    if (strengths.length === 0) {
      strengths.push('Completing the assessment');
    }
    if (improvements.length === 0) {
      improvements.push('Keep practicing all areas');
    }

    return {
      totalQuestions: questions.length,
      correctAnswers,
      accuracy,
      learningEfficiency: Math.round(accuracy * 0.9 + Math.random() * 10),
      totalTime,
      categoryScores,
      strengths,
      improvements,
    };
  }, [userAnswers, totalTime]);

  const handleRetake = () => {
    setPhase('welcome');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setFeedbackState('none');
    setUserAnswers([]);
    setCompletedQuestions([]);
    setTotalTime(0);
    setIsTimerRunning(false);
    setQuestionStartTime(0);
    setIsReinforcementQuestion(false);
    setCurrentQuestion(questions[0]);
  };

  const handleTimeUpdate = (seconds: number) => {
    setTotalTime(seconds);
  };

  const result = phase === 'summary' ? calculateResult() : null;

  return (
    <div className="min-h-screen bg-gradient-subtle relative">
      <FloatingParticles />

      <AnimatePresence mode="wait">
        {phase === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WelcomeScreen onStart={handleStartInstructions} />
          </motion.div>
        )}

        {phase === 'instructions' && (
          <motion.div
            key="instructions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <InstructionsScreen onBegin={handleBeginAssessment} />
          </motion.div>
        )}

        {phase === 'assessment' && (
          <motion.div
            key="assessment"
            className="container max-w-3xl mx-auto py-8 px-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <motion.h1
                className="text-xl font-semibold text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                Aptitude Assessment
              </motion.h1>
              <Timer isRunning={isTimerRunning} onTimeUpdate={handleTimeUpdate} />
            </div>

            {/* Progress */}
            <ProgressIndicator
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              completedQuestions={completedQuestions}
            />

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <QuestionCard
                  question={currentQuestion}
                  isReinforcement={isReinforcementQuestion}
                />

                {/* Answer Options */}
                <div className="space-y-3 mb-6">
                  {currentQuestion.options.map((option, index) => (
                    <AnswerOption
                      key={index}
                      option={option}
                      index={index}
                      isSelected={selectedAnswer === index}
                      feedbackState={feedbackState}
                      correctAnswer={currentQuestion.correctAnswer}
                      onSelect={handleSelectAnswer}
                      disabled={feedbackState !== 'none'}
                    />
                  ))}
                </div>

                {/* Check Answer Button */}
                {feedbackState === 'none' && (
                  <motion.button
                    onClick={handleCheckAnswer}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      selectedAnswer !== null
                        ? 'btn-primary'
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                    disabled={selectedAnswer === null}
                    whileHover={selectedAnswer !== null ? { scale: 1.02 } : {}}
                    whileTap={selectedAnswer !== null ? { scale: 0.98 } : {}}
                  >
                    Check Answer
                  </motion.button>
                )}

                {/* Feedback */}
                {feedbackState === 'correct' && (
                  <SuccessFeedback
                    explanation={currentQuestion.explanation}
                    onContinue={handleContinue}
                  />
                )}

                {feedbackState === 'incorrect' && selectedAnswer !== null && (
                  <LearningMode
                    question={currentQuestion}
                    selectedAnswer={selectedAnswer}
                    onContinue={handleContinue}
                    onTrySimilar={handleTrySimilar}
                    hasReinforcement={!!currentQuestion.reinforcementQuestion && !isReinforcementQuestion}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

        {phase === 'summary' && result && (
          <motion.div
            key="summary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SummaryScreen result={result} onRetake={handleRetake} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AssessmentPage;
