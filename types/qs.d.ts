declare module 'qs' {
    const qs: {
      parse(str: string, options?: any): any;
      stringify(obj: any, options?: any): string;
    };
    export default qs;
  }
  