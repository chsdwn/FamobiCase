import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { isAxiosError } from 'axios';
import { Button, Surface, Text, useTheme } from 'react-native-paper';

import { Icon } from '@/components';
import { defaultTheme } from '@/config/theme';
import { scaleSizeByWidth } from '@/utils';

import type { FallbackComponentProps } from 'react-native-error-boundary';

export const GamesErrorFallback = ({
  error,
  resetError,
}: FallbackComponentProps) => {
  const theme = useTheme();

  let errorMessage = 'An error occured. While fetching games.';
  if (isAxiosError(error)) {
    const status = error.response?.status;
    if (status === 404) {
      errorMessage = "The game you're looking for not found.";
    } else if (status === 500) {
      errorMessage = 'Our servers not responding right now. Try again later.';
    } else if (error.message === 'Network Error') {
      errorMessage =
        'No internet connection. Connect to a network an try again.';
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <Surface mode="flat" style={styles.container}>
        <Icon
          name="alert-circle-outline"
          size={scaleSizeByWidth(32)}
          color={theme.colors.error}
        />
        <Text variant="bodyLarge" style={styles.message}>
          {errorMessage}
        </Text>
        <Button onPress={resetError} mode="outlined" style={styles.button}>
          Try Again
        </Button>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: defaultTheme.spacing[3],
  },
  message: {
    textAlign: 'center',
  },
  button: {
    marginTop: defaultTheme.spacing[4],
  },
});
