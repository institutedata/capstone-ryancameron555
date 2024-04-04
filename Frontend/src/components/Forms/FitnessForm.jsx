/** @format */

import { useState } from 'react';
import { Typography, Select, Button } from '@mui/material';
import {
  StyledInputLabel,
  StyledMenuItem,
  FitnessFormContainer,
  ExerciseListContainer, // Assuming you have these styled components defined
} from './FormStyles'; // Assuming you have this file with styled components defined
import ExerciseCard from '../Cards/ExerciseCard';
import axios from 'axios';
import { SERVER_PATHS } from '../../routes/Paths';

const FitnessForm = () => {
  const [muscleGroup, setMuscleGroup] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [exercises, setExercises] = useState([]);
  const [apiCalled, setApiCalled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!apiCalled) {
      console.log(SERVER_PATHS.EXERCISE_API);
      try {
        const queryString = `?muscle=${muscleGroup}&type=${exerciseType}&difficulty=${difficulty}`;
        const response = await axios.get(
          `${SERVER_PATHS.EXERCISE_API}${queryString}`
        );
        setExercises(response.data); // Update state with fetched exercises
        setApiCalled(true); // Update state to indicate API call has been made
        setFormSubmitted(true); // Update state to indicate form has been submitted
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    }
  };

  return (
    <FitnessFormContainer id="exercise-form" onSubmit={handleSubmit}>
      <Typography variant="h4">Exercise Form</Typography>

      <StyledInputLabel id="muscle-group-label">Muscle Group</StyledInputLabel>
      <Select
        labelId="muscle-group-label"
        value={muscleGroup}
        onChange={(e) => setMuscleGroup(e.target.value)}
        style={{ width: '100%' }}
      >
        <StyledMenuItem value="">None</StyledMenuItem>
        <StyledMenuItem value="abdominals">Abdominals</StyledMenuItem>
        <StyledMenuItem value="biceps">Biceps</StyledMenuItem>
        <StyledMenuItem value="chest">Chest</StyledMenuItem>
        <StyledMenuItem value="calves">Calves</StyledMenuItem>
        <StyledMenuItem value="glutes">Glutes</StyledMenuItem>
        <StyledMenuItem value="hamstrings">Hamstrings</StyledMenuItem>
        <StyledMenuItem value="quadriceps">Quadriceps</StyledMenuItem>
        <StyledMenuItem value="trapezius">Trapezius</StyledMenuItem>
        <StyledMenuItem value="triceps">Triceps</StyledMenuItem>
      </Select>

      <StyledInputLabel id="exercise-type-label">
        Exercise Type
      </StyledInputLabel>
      <Select
        labelId="exercise-type-label"
        value={exerciseType}
        onChange={(e) => setExerciseType(e.target.value)}
        style={{ width: '100%' }}
      >
        <StyledMenuItem value="">None</StyledMenuItem>
        <StyledMenuItem value="cardio">Cardio</StyledMenuItem>
        <StyledMenuItem value="weightlifting">Weightlifting</StyledMenuItem>
        <StyledMenuItem value="plyometrics">Plyometrics</StyledMenuItem>
        <StyledMenuItem value="powerlifting">Powerlifting</StyledMenuItem>
        <StyledMenuItem value="strength">Strength Training</StyledMenuItem>
        <StyledMenuItem value="stretching">Stretching</StyledMenuItem>
        <StyledMenuItem value="strongman">Strongman Training</StyledMenuItem>
      </Select>

      <StyledInputLabel id="difficulty-label">Difficulty</StyledInputLabel>
      <Select
        labelId="difficulty-label"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        style={{ width: '100%' }}
      >
        <StyledMenuItem value="">None</StyledMenuItem>
        <StyledMenuItem value="beginner">Beginner</StyledMenuItem>
        <StyledMenuItem value="intermediate">Intermediate</StyledMenuItem>
        <StyledMenuItem value="advanced">Advanced</StyledMenuItem>
      </Select>

      <br />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={apiCalled}
      >
        Generate Exercise
      </Button>
      {/* Inside the ExerciseListContainer, add a check before rendering ExerciseCard components */}
      <ExerciseListContainer>
        {formSubmitted && exercises && exercises.length > 0 && (
          <div>
            <Typography variant="h4">Exercise Results</Typography>
            {exercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </div>
        )}
      </ExerciseListContainer>
    </FitnessFormContainer>
  );
};

export default FitnessForm;
