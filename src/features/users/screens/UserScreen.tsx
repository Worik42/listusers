import React, {FC} from 'react';
import {StyledScreen} from '../../../common/ui/StyledScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../../common/core/navigation/RootStack';
import {ROUTES} from '../../../common/core/Navigation/routes';

type TProps = NativeStackScreenProps<RootStackParamsList, ROUTES.UserScreen>;

const UserScreen: FC<TProps> = ({navigation, route}) => {
  return <StyledScreen></StyledScreen>;
};

export {UserScreen};
