import { FileFacetMetadata } from "../file-facet-metadata/file-facet-metadata.model";

export class FileFacetMetadataSummary {

    facetMetadata: FileFacetMetadata[];
    facetMetadataByFacetName: Map<string, FileFacetMetadata>;
    sortOrder: string[];
    loading: boolean;
    exists: boolean;

    constructor(facetMetadata: FileFacetMetadata[], loading: boolean) {

        this.facetMetadata = facetMetadata;
        this.loading = loading;
        this.exists = facetMetadata.length && facetMetadata.length > 0;

        const facetMetadataByFacetName = new Map<string, FileFacetMetadata>();
        const sortOrder = [];

        this.facetMetadata.forEach((metadatum: FileFacetMetadata) => {
            facetMetadataByFacetName.set(metadatum.name, metadatum);
            sortOrder.push(metadatum.name);
        });
        this.facetMetadataByFacetName = facetMetadataByFacetName;
        this.sortOrder = sortOrder;
    }


    public setLoading(loading: boolean): FileFacetMetadataSummary {
        return new FileFacetMetadataSummary(this.facetMetadata, loading);
    }

    public setFacetMetadataSummary(facetMetadata: FileFacetMetadata[]) {
        return new FileFacetMetadataSummary(facetMetadata, false);
    }
}
