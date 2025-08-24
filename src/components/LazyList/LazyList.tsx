import { forwardRef, useCallback } from "react";
import { FlatList } from "react-native";
import { LazyListProps } from "./types";
import { styles } from "./styles";
import { Spacer } from "../Spacer/Spacer";

export const LazyList = forwardRef<FlatList, LazyListProps>((props, ref) => {

  const renderSeparator = useCallback(() => <Spacer space="s" />, [])

  return (
    <FlatList
      ref={ref}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(_, i) => String(i)}
      {...props}
    />
  );
});
