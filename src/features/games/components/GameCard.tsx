import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, DefaultTheme, Text, useTheme } from 'react-native-paper';
import { Image } from 'expo-image';

import { Icon } from '@/components';
import { defaultTheme } from '@/config/theme';
import { scaleSizeByWidth } from '@/utils';
import type { IGame } from '../types';

const imagePlaceholder =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[f' +
  'QayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ay' +
  'ayj[ayfjj[j[ayjuayj[';

type IProps = {
  game: IGame;
};
export const GameCard = React.memo(({ game }: IProps) => {
  const theme = useTheme();

  return (
    <Card elevation={3} style={{ backgroundColor: theme.colors.surface }}>
      <Image
        source={game.thumbnail}
        style={styles.img}
        contentFit="contain"
        placeholder={imagePlaceholder}
        recyclingKey={`game-thumbnail-${game.id}`}
      />
      <Text variant="titleLarge" style={styles.title}>
        {game.title}
      </Text>
      <View style={styles.platformGenreContainer}>
        <View style={styles.iconLabelContainer}>
          <Icon
            name="layers-triple"
            size={scaleSizeByWidth(5.5)}
            color={theme.colors.tertiary}
            style={styles.icon}
          />
          <Text variant="labelLarge">{game.platform}</Text>
        </View>
        <View style={styles.iconLabelContainer}>
          <Icon
            name="shape"
            size={scaleSizeByWidth(5.5)}
            color={theme.colors.tertiary}
            style={styles.icon}
          />
          <Text variant="labelLarge">{game.genre}</Text>
        </View>
      </View>
    </Card>
  );
});

const styles = StyleSheet.create({
  img: {
    aspectRatio: 365 / 206,
    borderRadius: DefaultTheme.roundness * 2,
  },
  title: {
    textAlign: 'center',
    paddingVertical: defaultTheme.spacing[2],
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: defaultTheme.spacing[3],
  },
  platformGenreContainer: {
    marginBottom: defaultTheme.spacing[3],
    marginHorizontal: defaultTheme.spacing[4],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconLabelContainer: {
    flexDirection: 'row',
    marginTop: defaultTheme.spacing[1],
  },
  icon: {
    marginRight: defaultTheme.spacing[2],
  },
});
