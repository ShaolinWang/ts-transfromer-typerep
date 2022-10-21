import { TypeRep } from './typeRep';

export declare function typeRep<T>(): TypeRep;
export { typeRep as default} from './typeRep';
export {
  TypeKind, TypeRep, NumberRep, BooleanRep, BigIntRep, StringRep, SymbolRep, NullRep, UndefinedRep,
  VoidRep, AnyRep, UnknownRep, NeverRep, NonPrimitiveRep, UnionRep, IntersectionRep, ObjectRep
} from './typeRep';