export interface ScfInputs {
  code?: { bucket?: string; object?: string; src?: string };
  name?: string;
  projectName?: string; // only for django framework
  djangoProjectName?: string; // only for django framework
  role?: string;
  serviceId?: string;
  handler?: string;
  runtime?: string;
  namespace?: string;
  description?: string;

  environment?: {
    variables?: Record<string, string>;
  };

  lastVersion?: string;

  layers?: [];
  cfs?: [];
  timeout?: number;
  traffic?: number;
  memorySize?: number;
  tags?: {}[];
  needSetTraffic?: boolean | string;
  vpcConfig?: string;
}

export interface ApigwInputs {
  oldState?: any;

  isDisabled?: boolean;
  serviceId?: string;

  serviceDesc?: string;
  serviceName?: string;

  environment?: 'prepub' | 'release' | 'test';
  customDomains?: {
    domain: string;
    protocols: ('http' | 'https')[];
    certificateId: string;
    isDefaultMapping?: boolean;
    pathMappingSet: [];
    netType: string;
    isForcedHttps: boolean;
    subDomain?: string;
    created?: boolean;
  }[];

  path?: string;
  enableCORS?: boolean;

  serviceTimeout?: number;
  apiName?: string;

  protocols: ('http' | 'https')[];
  endpoints: {
    path?: string;
    enableCORS?: boolean;
    serviceTimeout?: number;
    method?: string;
    apiName?: string;

    function?: {
      isIntegratedResponse?: boolean;
      functionName: string;
      functionNamespace: string;
      functionQualifier: string;
    };

    usagePlan?: {
      usagePlanId: string;
      usagePlanName: string;
      usagePlanDesc: string;
      maxRequestNum: number;
    };

    auth?: {
      secretName?: string;
      secretIds?: string;
    };
  }[];
  autoAddDnsRecord: boolean;

  function?: {
    functionQualifier: string;
  };

  usagePlan?: {
    usagePlanId: string;
    usagePlanName: string;
    usagePlanDesc: string;
    maxRequestNum: number;
  };

  auth?: {
    secretName?: string;
    secretIds?: string;
  };
}

export interface CosInputs {
  replace?: boolean;
  bucket: string;
  sources?: { src: string; targetDir: string }[];
}

export interface CdnInputs {
  domain: string;
  area?: string;
  autoRefresh?: boolean;
  refreshType?: string;
  forceRedirect?: {
    switch?: 'on' | 'off' | undefined;
    redirectType?: 'https';
    redirectStatusCode: number;
  };
  https?: { switch?: 'on' | 'off' | undefined; http2?: 'on' | 'off' | undefined; certId: string };
}

export interface StaticInputs {
  cosConf: CosInputs;
  cdnConf?: CdnInputs;
}

export interface Inputs {
  entryFile?: string;
  projectName?: string;
  djangoProjectName?: string;
  serviceId?: string;
  functionConf?: ScfInputs;
  apigatewayConf?: ApigwInputs;

  serviceName?: string;

  region?: string;
  src?: string;
  role?: string;
  handler?: string;
  runtime?: string;
  namespace?: string;
  srcOriginal?: {
    bucket: string;
    object: string;
  };
  functionName?: string;
  description?: string;
  publish?: string;
  traffic?: number;
  tags?: number;
  layers?: string[];
  staticConf?: StaticInputs;
}

export interface MetricsInputs {
  tz?: string;
  rangeStart?: string;
  rangeEnd?: string;
}
