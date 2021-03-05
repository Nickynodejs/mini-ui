import React from 'react';
import Taro from '@tarojs/taro';
import clsx from 'clsx';
import { View } from '@tarojs/components';
import './index.less';

export interface SwitchProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  name?: string; // form 用
  checked?: boolean; //是否选中 默认值或外面传给内部值
  disabled?: boolean; // 是否禁用
  size?: string; // 大小
  onChange: (detail: boolean) => void;
  type?: 'circle' | 'block'; // 形状圆或方块
}

const CarSwitch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const {
    prefixCls = 'zc-switch',
    className,
    size = '24',
    disabled,
    type = 'block',
    ...restProps
  } = props;
  const [checked, setChecked] = React.useState(props.checked as boolean);
  React.useEffect(() => {
    setChecked(!!props.checked);
  }, [props.checked]);
  /* React.useEffect(() => {
    props?.onChange?.(checked);
  }, [checked]);*/

  const pxTransform = (sz:string, base:number, border:number) => {
    return `${Taro.pxTransform((parseInt(String(sz)) - border) * base)}`;
  };
  const style = React.useMemo(() => {
    if (type === 'block') {
      return {
        width: pxTransform(size, 4, 0),
        height: pxTransform(size, 2, 0),
        borderRadius: 3,
      };
    }
    return {
      width: pxTransform(size, 4, 0),
      height: pxTransform(size, 2, 0),
      borderRadius: pxTransform(size, 2, 0),
    };
  }, [size, type]);
  const styl = React.useMemo(() => {
    if (type === 'block') {
      if (checked) {
        return {
          width: pxTransform(size, 2, 1),
          height: pxTransform(size, 2, 1),
          transform: `translateX(${Taro.pxTransform(
            parseInt(String(size)) * 2
          )})`,
          borderRadius: 3,
        };
      } else {
        return {
          width: pxTransform(size, 2, 1),
          height: pxTransform(size, 2, 1),
          borderRadius: 3,
        };
      }
    } else {
      return {
        width: pxTransform(size, 2, 1),
        height: pxTransform(size, 2, 1),
      };
    }
  }, [size, checked, type]);
  const cls = clsx(prefixCls, className, {
    [`${prefixCls}-checked`]: checked,
    disabled,
  });
  const handleClick = (check: boolean) => {
    if (disabled) return;
    setChecked(!check);
    props?.onChange?.(!check);
  };

  return (
    <View
      className={cls}
      onClick={() => handleClick(checked)}
      {...{ style }}
      {...restProps}
    >
      <View className={`${prefixCls}-box`} {...{ style: styl }} />
    </View>
  );
};

export default CarSwitch;
