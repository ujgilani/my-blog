
export type Answers = {
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
  q5?: string;
  q6?: string;
};

export type Result = {
  strengths: string[];
  weaknesses: string[];
  suggestions: { title: string; description: string }[];
};

export const questions = [
    {
        id: 'q1',
        text: '1. How would you describe your budgeting habits?',
        options: [
          { value: 'a', text: 'I have a detailed budget and stick to it.' },
          { value: 'b', text: "I have a budget, but I don't always follow it." },
          { value: 'c', text: "I don't have a budget." },
        ],
      },
      {
        id: 'q2',
        text: '2. How much do you have in your emergency fund?',
        options: [
          { value: 'a', text: '6+ months of living expenses' },
          { value: 'b', text: '1-5 months of living expenses' },
          { value: 'c', text: 'Less than 1 month of living expenses' },
        ],
      },
      {
        id: 'q3',
        text: '3. What is your current debt-to-income ratio (excluding mortgage)?',
        options: [
          { value: 'a', text: 'Less than 15%' },
          { value: 'b', text: '15% - 30%' },
          { value: 'c', text: 'More than 30%' },
        ],
      },
      {
        id: 'q4',
        text: '4. What percentage of your monthly income do you save or invest?',
        options: [
          { value: 'a', text: '15% or more' },
          { value: 'b', text: '5% - 14%' },
          { value: 'c', text: 'Less than 5%' },
        ],
      },
      {
        id: 'q5',
        text: '5. How confident are you in your retirement plan?',
        options: [
          { value: 'a', text: 'Very confident, I have a solid plan.' },
          { value: 'b', text: 'Somewhat confident, but I could be doing more.' },
          { value: 'c', text: 'Not confident at all, I have no plan.' },
        ],
      },
      {
        id: 'q6',
        text: '6. In the last 6 months, have you tracked your spending?',
        options: [
          { value: 'a', text: 'Yes, I track my spending regularly.' },
          { value: 'b', text: "I've tried a few times but not consistently." },
          { value: 'c', text: "No, I don't track my spending." },
        ],
      },
];

export const calculateResult = (answers: Answers): Result => {
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const suggestions: { title: string; description: string }[] = [];

  // Q1: Budgeting
  if (answers.q1 === 'a') {
    strengths.push('Excellent budgeting habits.');
  } else {
    weaknesses.push('Budgeting needs improvement.');
    suggestions.push({
      title: 'Create a Budget That Works',
      description: "Start by tracking your income and expenses for a month. Use the 50/30/20 rule as a guideline: 50% for needs, 30% for wants, and 20% for savings. There are many apps that can help automate this.",
    });
  }

  // Q2: Emergency Fund
  if (answers.q2 === 'a') {
    strengths.push('Strong emergency fund.');
  } else if (answers.q2 === 'b') {
    weaknesses.push('Emergency fund could be larger.');
    suggestions.push({
      title: 'Boost Your Emergency Fund',
      description: 'Aim to have at least 3-6 months of living expenses saved. Automate weekly or monthly transfers to a high-yield savings account to build it faster.',
    });
  } else {
    weaknesses.push('Lack of an emergency fund is a major risk.');
    suggestions.push({
        title: 'Start an Emergency Fund Now',
        description: 'This is your top priority. Open a separate high-yield savings account and start with a small, achievable goal, like $500. Automate transfers, even small ones, to build momentum.',
      });
  }

  // Q3: Debt
  if (answers.q3 === 'a') {
    strengths.push('Low debt levels.');
  } else {
    weaknesses.push('High debt levels are holding you back.');
    suggestions.push({
      title: 'Create a Debt Payoff Plan',
      description: "List all your debts from highest interest rate to lowest (the 'avalanche' method). Focus on paying off the one with the highest rate first while making minimum payments on others.",
    });
  }

  // Q4: Savings Rate
  if (answers.q4 === 'a') {
    strengths.push('Excellent savings rate.');
  } else {
    weaknesses.push('Savings rate could be higher.');
    suggestions.push({
      title: 'Increase Your Savings Rate',
      description: "Aim to save at least 15% of your income. If that's too much right now, start with 1% and increase it by 1% every few months. 'Pay yourself first' by automating savings transfers on payday.",
    });
  }

  // Q5: Retirement
  if (answers.q5 === 'a') {
    strengths.push('Confident about retirement.');
  } else {
    weaknesses.push('Retirement planning needs attention.');
    suggestions.push({
      title: 'Focus on Your Retirement Plan',
      description: "If your employer offers a 401(k) with a match, contribute enough to get the full match—it's free money. If not, open an IRA and start making regular contributions.",
    });
  }

  // Q6: Spending Tracking
  if (answers.q6 === 'a') {
    strengths.push('Good awareness of spending habits.');
  } else {
    weaknesses.push('Lack of clarity on where money is going.');
    suggestions.push({
      title: 'Track Your Spending',
      description: "You can't improve what you don't measure. Use an app or a simple spreadsheet to track your spending for a month. This will reveal areas where you can cut back and save more.",
    });
  }

  return { strengths, weaknesses, suggestions };
};
