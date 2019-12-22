export class Feature {
    featureId?: number;
    featureType?: string;
    name?: string;
    description?: string;
    version?: string;
    githubUrl?: string;
    documentUrl?: string;
    guideUrl?: string;
}

export enum FeatureType {
    Backend = 0,
    Frontend = 1
}